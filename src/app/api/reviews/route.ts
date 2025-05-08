import { NextResponse } from 'next/server';

async function translateText(text: string): Promise<string> {
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=tr&dt=t&q=${encodeURIComponent(text)}`
    );
    
    if (!response.ok) {
      throw new Error('Translation failed');
    }
    
    const data = await response.json();
    return data[0][0][0];
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Hata durumunda orijinal metni döndür
  }
}

export async function GET() {
  try {
    const placeId = 'ChIJb9-mpgHSuRQR0UO0SxkWLbg';
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API anahtarı bulunamadı' },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&maxresults=20&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error_message) {
      return NextResponse.json(
        { error: data.error_message },
        { status: 500 }
      );
    }

    // Yorumları çevir
    if (data.result && data.result.reviews) {
      const translatedReviews = await Promise.all(
        data.result.reviews.map(async (review: any) => ({
          ...review,
          text: await translateText(review.text)
        }))
      );
      
      return NextResponse.json({
        ...data,
        result: {
          ...data.result,
          reviews: translatedReviews
        }
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Yorumlar yüklenirken bir hata oluştu' },
      { status: 500 }
    );
  }
} 