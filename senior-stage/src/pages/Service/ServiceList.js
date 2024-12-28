import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ServiceList() {
	const [services, setServices] = useState([
		{
		  id: 1,
		  title: "홈쿠킹 클래스",
		  description: "서울 서초구 · 요리 경험이 풍부한 시니어 제공",
		  provider: "김순자",
		  image: "https://via.placeholder.com/300x200?text=홈쿠킹",
		  isVerified: true,
		},
		{
		  id: 2,
		  title: "정원 관리 서비스",
		  description: "서울 강남구 · 작은 정원부터 대형 정원까지 관리 가능",
		  provider: "박영수",
		  image: "https://via.placeholder.com/300x200?text=정원관리",
		  isVerified: true,
		},
		{
		  id: 3,
		  title: "독서 토론 모임 주최",
		  description: "서울 용산구 · 다양한 분야의 책을 함께 읽고 토론",
		  provider: "이정숙",
		  image: "https://via.placeholder.com/300x200?text=독서토론",
		  isVerified: false,
		},
		{
		  id: 4,
		  title: "전통 공예 클래스",
		  description: "서울 서초구 · 한지 공예 및 자수 기법 배우기",
		  provider: "최민자",
		  image: "https://via.placeholder.com/300x200?text=전통공예",
		  isVerified: false,
		},
		{
		  id: 5,
		  title: "건강한 가정식 배달",
		  description: "서울 마포구 · 정성과 건강을 담은 가정식 제공합니다.",
		  provider: "이경자",
		  image: "https://via.placeholder.com/300x200?text=가정식",
		  isVerified: true,
		},
		{
		  id: 6,
		  title: "시니어 테크 멘토링",
		  description: "서울 구로구 · 스마트폰 사용법부터 기본 IT 기술 교육",
		  provider: "정기현",
		  image: "https://via.placeholder.com/300x200?text=테크멘토링",
		  isVerified: true,
		},
	  ]);

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem("services"));
    if (storedServices) {
      setServices((prevServices) => [...prevServices, ...storedServices]);
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">등록된 서비스</h2>

      {/* 사용자 기대와 제공 서비스 섹션 */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">사용자 기대와 제공 가능한 서비스</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 사용자 기대 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4 text-blue-600">사용자가 기대하는 서비스</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>취업 멘토링과 직무 상담</li>
              <li>생활 서비스(집수리, 요리)</li>
              <li>개인 맞춤형 기술 교육</li>
              <li>정서적 지원과 조언</li>
            </ul>
          </div>

          {/* 시니어 제공 서비스 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4 text-green-600">시니어가 제공하는 서비스</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>전문 분야별 실무 조언</li>
              <li>멘토링과 강연</li>
              <li>가정 맞춤형 생활 서비스</li>
              <li>커리어 컨설팅과 워크숍</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 서비스 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                제공자: <span className="font-semibold">{service.provider}</span>
              </p>
              <p>
                {service.isVerified && (
                  <span className="text-green-500 font-semibold">[인증됨]</span>
                )}
              </p>
              <Link
                to={`/service-detail/${service.id}`}
                className="mt-4 inline-block px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-400"
              >
                상세보기
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
