import React from "react";

function TeamAndVision() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">팀과 비전</h1>

      {/* 팀원 소개 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">팀원 소개</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 object-cover rounded-full mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-2xl font-bold text-blue-500">최요한</h3>
              <p className="text-lg text-gray-700">
                개발자 및 플랫폼 창업자. 소프트웨어와 사용자 경험에 깊은 관심을
                가지고 있으며, 시니어와 청년 간의 연결을 통해 사회적 가치를
                창출하고자 합니다.
              </p>
              <p className="text-lg text-gray-700 mt-4">
                <strong>역량:</strong> 풀스택 개발, 데이터 분석, 사용자 경험
                설계
              </p>
              <p className="text-lg text-gray-700 mt-2">
                <strong>목표:</strong> 사회적 문제를 기술로 해결하며, 플랫폼을 통해
                세대 간의 협력을 이끌어내는 것을 목표로 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 문제 해결 의지 섹션 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">문제 해결 의지</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          현대 사회에서 세대 간 격차와 소외감은 점점 더 커지고 있습니다.
          플랫폼은 시니어들의 전문 지식과 경험을 활용하여 청년들이 필요한 도움을
          받을 수 있도록 돕습니다. 이를 통해 사회적 문제를 해결하고, 모두가
          함께 성장할 수 있는 기반을 마련합니다.
        </p>
      </section>

      {/* 비전 섹션 */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">플랫폼 비전</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-500 mb-4">세대 간 연결</h3>
            <p className="text-gray-700">
              시니어의 경험과 지식을 청년에게 전달하여 세대 간의 협력을
              증진합니다.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-500 mb-4">사회적 가치</h3>
            <p className="text-gray-700">
              기술을 활용해 사회적 문제를 해결하고, 세대와 지역사회를 위한
              지속가능한 가치를 창출합니다.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-500 mb-4">혁신과 성장</h3>
            <p className="text-gray-700">
              플랫폼을 지속적으로 개선하며, 새로운 세대와 기술을 아우르는
              혁신적인 솔루션을 제공합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamAndVision;
