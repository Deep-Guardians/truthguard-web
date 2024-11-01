// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>TruthGuard</h2>
      <div className='`content-wrapper'>
        <div className='content'>
          <div className="navy-banner">
            
            <p className="subtitle">“가짜가 아닌 진짜를 지키다”</p>
            <br />
            <p>
              TruthGuard는 머신러닝 기술을 활용하여 영상을 분석하고 해당 콘텐츠가 딥페이크인지 여부를 판단하는 서비스입니다.
            </p>
            <p>
              딥페이크 기술의 악용으로 허위 정보와 사기 등이 확산되고 있습니다.
              TruthGuard는 신뢰할 수 있는 정보를 제공하며, 프라이버시를 보호하는 것을 목표로 합니다.
            </p>
            <div className="buttons">
              <button onClick={() => navigate('/disrupt/upload')}>생성 방해</button>
              <button onClick={() => navigate('/detect/upload')}>탐지</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="footer">
        <p>‘안팁페이크’ 프로젝트는 오픈소스 커뮤니티에 공개되어 있습니다.</p>
        <p>누구나 코드에 기여하고 개선에 참여할 수 있습니다.</p>
        <div className="image-container">
          <a href="https://www.naver.com">
            <img src="/github.png" alt="GitHub Logo" className="github-logo" />
          </a>
          <a href="https://www.naver.com">
            <img src="/discord.png" alt="Discord Logo" className="discord-logo" />
          </a>
        </div>
      </div> */}
      <div className='footer'>
        <p>
        <strong>생성 방해</strong> 기능은 사진에 인공지능이 감지하기 어려운 노이즈를 추가해 딥페이크 생성 모델의 얼굴 인식을 방해합니다. </p>
        <p>사용자는 크롬 익스텐션을 통해 간편하게 사진을 업로드하고, 보호된 이미지를 다운로드할 수 있습니다. </p>
        <p>처리된 이미지는 서버에 저장되지 않으며, 개인정보는 안전하게 보호됩니다. </p>
        <p>SNS 프로필 사진이나 공개 이미지에 노이즈를 삽입해 악의적인 사용을 예방하세요.</p>
        <a href="https://www.naver.com">
          <img src="/chrome.png" alt="Discord Logo" className="discord-logo" />
        </a>
      </div>
    </div>
  );
}

export default Home;
