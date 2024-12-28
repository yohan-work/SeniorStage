import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockData from "../../data/mockData"; // 공통 데이터 import

function ServiceDetail() {
  const { id } = useParams(); // URL에서 ID 가져오기
  const [service, setService] = useState(null);

  useEffect(() => {
    console.log("URL Parameter ID:", id); // 디버깅용 ID 출력
    const selectedService = mockData.find((item) => item.id === parseInt(id));
    console.log("Selected Service:", selectedService); // 선택된 서비스 로그 출력
    setService(selectedService);
  }, [id]);

  if (!service) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">서비스 정보를 찾을 수 없습니다.</h2>
        <p className="text-gray-700">올바르지 않은 요청입니다. 다시 시도해주세요.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
      <p className="text-gray-700 mb-6">{service.description}</p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg mb-4">
          <span className="font-bold">제공자: </span>{service.provider}
        </p>
        <p className="text-lg mb-4">
          <span className="font-bold">등록일: </span>{service.date}
        </p>
        <p className="text-lg">
          <span className="font-bold">연락처: </span>
          <a href={`mailto:${service.contact}`} className="text-blue-500 underline">
            {service.contact}
          </a>
        </p>
      </div>
      <div className="mt-8">
        <a
          href="/service-list"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-400"
        >
          서비스 목록으로 돌아가기
        </a>
      </div>
    </div>
  );
}

export default ServiceDetail;
