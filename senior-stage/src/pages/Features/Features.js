import React from "react";
import { Link } from "react-router-dom";

function Feature() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">시니어스테이지의 주요 기능</h1>
          <p className="text-lg">
            시니어들의 시간, 지식, 기술을 공유하며 세대 간 연결을 돕는 다양한 기능을 제공합니다.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">플랫폼의 주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <div className="text-blue-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 12.75l2.25 2.25 5.25-7.5M21 12c0 5.25-4.5 9-9 9s-9-3.75-9-9 4.5-9 9-9 9 3.75 9 9z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">전문 기술 공유</h3>
              <p>시니어들의 전문 지식을 시간제로 공유하여 더 나은 가치를 만드세요.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <div className="text-teal-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">서비스 제공</h3>
              <p>집수리, 돌봄 등 소규모 서비스를 손쉽게 매칭하고 제공합니다.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 shadow-md rounded-md text-center">
              <div className="text-green-500 mb-4">
                <svg
                  className="w-12 h-12 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 12h-8M12 20V4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">시니어 멘토링</h3>
              <p>젊은 세대와의 멘토링을 통해 경험과 지식을 나눠보세요.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">차별성과 성공 사례</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">경쟁 플랫폼과의 차별성</h3>
              <p>
                시니어스테이지는 검증된 시니어와의 매칭 시스템, AI 기반 필터링, 그리고 세대 간
                신뢰 구축을 통해 기존 플랫폼과의 차별성을 강조합니다.
              </p>
              <ul className="list-disc list-inside mt-4">
                <li>검증된 시니어: 경력과 자격을 철저히 검토</li>
                <li>맞춤형 매칭: 사용자의 니즈에 최적화된 매칭 제공</li>
                <li>사회적 가치: 세대 간 소통과 협력 촉진</li>
              </ul>
            </div>
            <div className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold text-teal-600 mb-4">성공 사례</h3>
              <p>
                김철수 시니어가 제공한 IT 컨설팅을 통해, 한 스타트업은 생산성을 30% 향상시켰습니다.
              </p>
              <p className="mt-4">
                박영희 시니어의 멘토링을 받은 대학생이 취업에 성공하며 꿈을 이루었습니다.
              </p>
              <p className="mt-4">
                최지영 시니어의 맞춤형 요리 서비스는 지역 사회에서 큰 호응을 얻고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">시니어스테이지에 참여해보세요</h2>
          <p className="text-lg mb-8">
            시니어와 젊은 세대가 함께 성장할 수 있는 플랫폼을 만들어갑니다.
          </p>
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-8 py-4 font-bold rounded-full hover:bg-blue-400"
          >
            지금 참여하기
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Feature;
