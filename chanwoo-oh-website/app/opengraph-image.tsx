import { ImageResponse } from 'next/og';

export const alt = 'Chanwoo Oh — Technology, with humans at its center.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#FAFAFA', padding: 72 }}>
        <div style={{ fontSize: 22, letterSpacing: 4, color: '#435BCC', fontWeight: 700 }}>ARTIFICIAL INTELLIGENCE · HUMAN-COMPUTER INTERACTION</div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 84, fontWeight: 800, lineHeight: 1.02, color: '#111111', letterSpacing: -3 }}>
          <span>Technology,</span>
          <span>with humans at its center.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', fontSize: 28, color: '#6B7280' }}>
          <span style={{ color: '#111111', fontWeight: 800 }}>Chanwoo Oh</span>
          <span>Sungkyunkwan University · Human-AI Interaction</span>
        </div>
      </div>
    ),
    size
  );
}
