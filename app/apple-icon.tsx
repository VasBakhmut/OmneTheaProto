import { ImageResponse } from 'next/og';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';
export default function AppleIcon() {
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'#414b3b'}}>
      <svg width="140" height="140" viewBox="0 0 64 64">
        <g stroke="#f5f2eb" strokeWidth="3.5" strokeLinecap="round"><path d="M32 12v40M12 32h40M18 18l28 28M18 46l28-28"/></g>
        <circle cx="32" cy="32" r="5" fill="#c5cdb8"/>
      </svg>
    </div>, size,
  );
}
