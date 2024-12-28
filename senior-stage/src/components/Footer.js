import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12 border-t">
      <div className="container mx-auto px-6">
        {/* 사회적 가치 섹션 */}
        <section className="mb-6">
          <h3 className="text-xl font-bold text-gray-800">사회적 가치 및 해결 과제</h3>
          <p className="text-gray-600 mt-2">
            SeniorStage는 단순한 서비스 제공을 넘어 세대 간 격차를 해소하고, 시니어의 경험과 지식을 활용하여 모두가 함께 성장하는 사회를 지향합니다.<br /> 우리의 플랫폼은 다음과 같은 과제를 해결하는 데 기여하고자 합니다.
          </p>
          <ul className="list-inside mt-4 text-gray-600">
            <li>- 세대 간 소통 활성화를 통한 사회적 연대 강화</li>
            <li>- 시니어의 경제 활동 지원 및 삶의 질 향상</li>
            <li>- 청년들에게 실질적 도움과 멘토링 제공</li>
          </ul>
          <p className="text-gray-600 mt-4">
            <b>함께 세상을 더 나은 방향으로 변화시키는 플랫폼이 되겠습니다.</b>
          </p>
        </section>

        {/* 기본 정보 */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h4 className="text-lg font-bold text-gray-800">SeniorStage</h4>
            <p className="text-gray-600">© 2025 SeniorStage. All rights reserved.</p>
          </div>
          <div className="space-x-4">
		  	<Link to="/dashboard" className="text-blue-500 hover:underline">
              매칭 현황
            </Link>
            <Link to="/features" className="text-blue-500 hover:underline">
              주요 기능
            </Link>
            <Link to="/success-stories" className="text-blue-500 hover:underline">
              성공 사례
            </Link>
            <Link to="/contact" className="text-blue-500 hover:underline">
              문의하기
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
