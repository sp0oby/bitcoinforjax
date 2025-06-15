import { ImageResponse } from 'next/server';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom right, #1E3A8A, #3B82F6)',
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 40,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Bitcoin Tax Guide for Jacksonville Business Owners
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          Navigate cryptocurrency tax compliance with confidence
        </div>
        <div
          style={{
            fontSize: 24,
            opacity: 0.6,
            marginTop: 'auto',
          }}
        >
          Bitcoin for Jax
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 