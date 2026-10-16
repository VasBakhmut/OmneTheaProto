import { ImageResponse } from 'next/og';
export const alt = 'OmneThea — Truth. Book one by Anar Mamedov. A practice in 40 steps.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',background:'#f5f2eb',color:'#292d26',padding:'60px 70px',position:'relative'}}>
      <div style={{display:'flex',flexDirection:'column',width:'660px',justifyContent:'space-between'}}>
        <div style={{display:'flex',fontSize:30,letterSpacing:-1}}>omnethea</div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{fontSize:15,letterSpacing:5,display:'flex',color:'#76796e'}}>OMNETHEA / BOOK ONE</div>
          <div style={{fontSize:142,lineHeight:1.15,letterSpacing:-7,display:'flex'}}>Truth</div>
          <div style={{fontSize:27,display:'flex',marginTop:16,color:'#414b3b'}}>A practice in 40 steps.</div>
        </div>
        <div style={{display:'flex',fontSize:15,letterSpacing:3}}>ANAR MAMEDOV</div>
      </div>
      <div style={{display:'flex',position:'absolute',right:55,top:55,width:370,height:520,background:'#e2e6da',alignItems:'center',justifyContent:'center'}}>
        <div style={{display:'flex',position:'absolute',width:320,height:320,border:'1px solid #bec7b1',borderRadius:160}} />
        <div style={{display:'flex',flexDirection:'column',width:220,height:320,padding:26,background:'#f8f1e3',transform:'rotate(9deg)',boxShadow:'15px 20px 24px #414b3b35',borderLeft:'7px solid #d4c9b2'}}>
          <div style={{display:'flex',fontSize:9,letterSpacing:2}}>ANAR MAMEDOV</div>
          <div style={{display:'flex',fontSize:47,lineHeight:1.05,marginTop:45}}>FOR</div>
          <div style={{display:'flex',fontSize:42,lineHeight:1.05}}>WHOM</div>
          <div style={{display:'flex',fontSize:12,marginTop:10}}>DOES IMMORTALITY EXIST?</div>
          <div style={{display:'flex',fontSize:34,color:'#863d34',marginTop:18}}>TRUTH</div>
          <div style={{display:'flex',fontSize:8,letterSpacing:3,marginTop:'auto'}}>OMNETHEA</div>
        </div>
      </div>
    </div>,
    size,
  );
}
