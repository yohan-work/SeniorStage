import React from "react";

function SuccessStories() {
  const stories = [
    {
      id: 1,
      title: "은퇴 후 새로운 삶의 시작",
      image: "https://via.placeholder.com/300x200?text=Success+Story+1",
      details:
        "김철수 님은 35년간 건설업에 종사하다가 정년퇴직 후 플랫폼을 통해 집수리 서비스를 제공하며 지역 주민들에게 큰 도움을 주고 있습니다. 그가 제공한 서비스는 주변 사람들로부터 큰 호평을 받으며 그의 삶에 활력을 더했습니다.",
    },
    {
      id: 2,
      title: "멘토링으로 세대 간 연결",
      image: "https://via.placeholder.com/300x200?text=Success+Story+2",
      details:
        "박영희 님은 은퇴 후 플랫폼에서 멘토로 활동하며 젊은 직장인들에게 커리어 상담을 제공하고 있습니다. 그녀의 멘토링은 참가자들에게 실질적인 도움을 주며 그녀 자신도 보람찬 하루를 보내고 있습니다.",
    },
    {
      id: 3,
      title: "건강한 음식으로 지역 사회에 기여",
      image: "https://via.placeholder.com/300x200?text=Success+Story+3",
      details:
        "최지영 님은 요리 경험을 바탕으로 건강한 맞춤형 가정식을 제공하며 지역 사회의 식생활 개선에 기여하고 있습니다. 그녀의 요리는 정성과 사랑이 담겨 있어 많은 고객들이 만족하고 있습니다.",
    },
    {
      id: 4,
      title: "IT 컨설팅으로 제2의 커리어를 시작",
      image: "https://via.placeholder.com/300x200?text=Success+Story+4",
      details:
        "홍길동 님은 플랫폼을 통해 IT 컨설팅 서비스를 제공하며 기업들의 업무 효율성을 높이는 데 큰 기여를 하고 있습니다. 그의 전문적인 조언은 기업들에게 실질적인 성과를 가져다주고 있습니다.",
    },
    {
      id: 5,
      title: "정원 관리로 환경을 가꾸다",
      image: "https://via.placeholder.com/300x200?text=Success+Story+5",
      details:
        "박수민 님은 정원 관리 서비스를 통해 아름다운 자연환경을 유지하며 많은 고객들에게 만족을 주고 있습니다. 그의 세심한 손길이 닿은 정원은 고객들에게 큰 감동을 주고 있습니다.",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">성공 사례</h1>
      
      {/* 숫자로 보는 성공 사례 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-6">숫자로 보는 성공 사례</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-5xl font-bold">95%</p>
            <p className="text-lg">매칭 성공률</p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-5xl font-bold">1,200+</p>
            <p className="text-lg">성공적인 매칭 사례</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <p className="text-5xl font-bold">4.9/5</p>
            <p className="text-lg">평균 리뷰 점수</p>
          </div>
        </div>
      </section>

      {/* 기존 성공 사례 */}
      <div className="space-y-12">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col md:flex-row items-center bg-gray-50 p-6 shadow-md rounded-md hover:shadow-lg"
          >
            {/* Lazy loading을 위해 loading="lazy" 추가 */}
            <img
              src={story.image}
              alt={story.title}
              className="w-full md:w-1/3 h-auto object-cover rounded-md mb-4 md:mb-0 md:mr-6"
              loading="lazy" // Lazy loading
              width="300" // 지정된 크기로 설정
              height="200" // 지정된 크기로 설정
            />
            <div className="md:flex-1">
              <h2 className="text-2xl font-bold mb-4">{story.title}</h2>
              <p className="text-gray-700 leading-relaxed">{story.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
