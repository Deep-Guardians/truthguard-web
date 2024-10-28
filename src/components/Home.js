// src/components/Home.js
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
  
    const handleDotClick = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div className="container">
        <div className={`content ${currentPage === 1 ? 'active' : ''}`}>
          <div className="navy-banner">
            <h2>‘TruthGuard’</h2>
            <p>“가짜가 아닌 진짜를 지키다”</p>
            <p>‘TruthGuard’는 머신러닝 기술을 활용하여 영상을 분석해 해당 콘텐츠가 딥페이크인지 아닌지를 판단하는 서비스입니다.</p>
          </div>
          <div className="buttons">
            <button>생성 방해</button>
            <button onClick={() => navigate('/main')}>탐지</button>
          </div>
        </div>
  
        <div className={`content ${currentPage === 2 ? 'active' : ''}`}>
          <div className="navy-banner">
            <h2>‘TruthGuard’</h2>
            <p>딥페이크 기술의 악용으로 인해 허위 정보, 명예 훼손, 사기 등 다양한 사회적 문제들이 발생하고 있습니다.</p>
            <p>‘TruthGuard’는 사람들에게 신뢰할 수 있는 정보를 제공하고, 개인의 프라이버시를 보호하는 것을 목표로 합니다.</p>
          </div>
          <div className="buttons">
            <button>생성 방해</button>
            <button onClick={() => navigate('/main')}>탐지</button>
          </div>
        </div>
        <div className="dots">
          <span className={currentPage === 1 ? 'dot active' : 'dot'} onClick={() => handleDotClick(1)}></span>
          <span className={currentPage === 2 ? 'dot active' : 'dot'} onClick={() => handleDotClick(2)}></span>
        </div>
        <div className="footer">
          <p>‘안팁페이크’ 프로젝트는 오픈소스 커뮤니티에 공개되어 있습니다.</p>
          <p>누구나 코드에 접근할 수 있으며, 버그 수정, 기능 개선 등에 기여할 수 있습니다.</p>
        </div>

        <div className="image-container">
            <a  href="https://www.naver.com"><img src="/github.png" alt="GitHub Logo" className="github-logo" /></a>
          
            <a  href="https://www.naver.com"><img src="/discord.png" alt="Discord Logo" className="discord-logo" /></a>
        </div>
      </div>
    );
  }

export default Home;
