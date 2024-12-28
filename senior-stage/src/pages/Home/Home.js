import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

function Home() {
  return (
    <>
      <style>
        {`
          .main-success .swiper-pagination {
            position: relative;
            bottom: 0;
            margin-top: 30px;
          }
        `}
      </style>
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-bold mb-6">시니어와 세대를 연결하는 플랫폼</h1>
            <p className="text-lg mb-8">
              시간, 지식, 기술을 공유하여 더 나은 세상을 만들어 갑니다.
            </p>
            <Link to="/features">
              <button className="px-8 py-4 bg-white text-blue-500 font-bold rounded-full shadow-lg hover:bg-gray-200">
                주요 기능 보기
              </button>
            </Link>
          </div>
        </section>

		{/* Mission & Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">플랫폼의 미션과 비전</h2>
            <p className="text-lg text-gray-700 mb-6">
              "세대를 연결하고, 함께 성장하며, 지속 가능한 사회를 만들어 갑니다."
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">미션</h3>
                <p className="text-gray-700">시니어와 청년 간의 연결을 통해 더 나은 사회를 구축합니다.</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">비전</h3>
                <p className="text-gray-700">세대 간의 지식과 경험 공유로 지속 가능한 변화를 선도합니다.</p>
              </div>
            </div>
			<div class="mt-8">
				<Link to="/vision">
					<button className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400">
					자세히 보기
					</button>
				</Link>
			</div>
          </div>
        </section>

        {/* Process Diagram Section */}
        <section className="py-16 bg-gray-50">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold mb-8 text-blue-600">플랫폼 사용 과정</h2>
				<p className="text-lg text-gray-700 mb-8">
				시니어와 사용자가 매칭되어 서비스를 제공받는 과정을 간단히 살펴보세요.
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-8">
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 text-lg font-bold">
					1
					</div>
					<p className="text-gray-700 font-semibold">회원가입</p>
					<p className="text-sm text-gray-500">시니어 또는 청년으로 회원 가입</p>
				</div>
				<div className="hidden md:block text-gray-500 text-xl font-bold">→</div>
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 text-lg font-bold">
					2
					</div>
					<p className="text-gray-700 font-semibold">서비스 요청</p>
					<p className="text-sm text-gray-500">원하는 서비스나 도움 요청</p>
				</div>
				<div className="hidden md:block text-gray-500 text-xl font-bold">→</div>
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 text-lg font-bold">
					3
					</div>
					<p className="text-gray-700 font-semibold">매칭</p>
					<p className="text-sm text-gray-500">적합한 시니어 또는 서비스를 매칭</p>
				</div>
				<div className="hidden md:block text-gray-500 text-xl font-bold">→</div>
				<div className="flex flex-col items-center">
					<div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 text-lg font-bold">
					4
					</div>
					<p className="text-gray-700 font-semibold">서비스 완료</p>
					<p className="text-sm text-gray-500">서비스 제공 및 피드백 제공</p>
				</div>
				</div>
			</div>
			</section>


        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">플랫폼의 주요 기능</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">전문 기술 공유</h3>
                  <p>보유한 지식을 시간제로 공유하여 새로운 가치를 만드세요.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">서비스 제공</h3>
                  <p>집수리, 돌봄 등 소규모 서비스를 손쉽게 매칭합니다.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">시니어 멘토링</h3>
                  <p>젊은 세대와의 멘토링을 통해 경험과 지식을 나눠보세요.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">시니어 중심의 차별화된 플랫폼</h2>
            <p className="text-lg text-gray-700 mb-6">
              "시니어가 중심이 되어 세대와 사회를 연결합니다."
              이 플랫폼은 시니어들에게 주도권을 부여하여 다양한 분야에서 활약할 수 있도록 돕습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">전문성 강조</h3>
                <p>
                  각 분야의 전문적인 경험과 지식을 활용해 필요한 곳에
                  가치를 제공합니다.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">세대 간 멘토링</h3>
                <p>
                  젊은 세대와 시니어 간의 멘토링 기회를 제공하여 상호
                  성장과 협력을 도모합니다.
                </p>
              </div>
              <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-4">사회적 가치 창출</h3>
                <p>
                  소규모 서비스와 공동체 활동을 통해 지역 사회와 함께 성장하고 발전합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Highlight Section */}
        <section className="py-16 bg-blue-100">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">시니어들의 놀라운 이야기</h2>
              <p className="text-gray-700 mb-4">
                멘토링, 기술 공유, 소규모 서비스를 통해 사회에 기여하고 있는 시니어들의 이야기를 확인해보세요.
              </p>
              <Link
                to="/success-stories"
                className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400"
              >
                성공 사례 보기
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://via.placeholder.com/500x300"
                alt="성공 사례"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">등록된 서비스</h2>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="service-swiper"
            >
              {[
                {
                  id: 1,
                  title: "집수리 서비스",
                  description: "간단한 집수리를 제공합니다.",
                  provider: "김철수",
                },
                {
                  id: 2,
                  title: "아이 돌봄 서비스",
                  description: "아이를 안전하게 돌봐드립니다.",
                  provider: "박영희",
                },
                {
                  id: 3,
                  title: "멘토링 프로그램",
                  description: "경험을 나누고 세대를 연결합니다.",
                  provider: "이민호",
                },
                {
                  id: 4,
                  title: "음식 요리 서비스",
                  description: "맞춤형 가정식을 제공합니다.",
                  provider: "최지영",
                },
                {
                  id: 5,
                  title: "IT 컨설팅",
                  description: "효율적인 IT 솔루션을 제공합니다.",
                  provider: "홍길동",
                },
                {
                  id: 6,
                  title: "정원 관리",
                  description: "정원을 아름답게 유지하는 서비스를 제공합니다.",
                  provider: "박수민",
                },
              ].map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="bg-gray-50 p-6 shadow-md rounded-md hover:shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <p className="text-sm text-gray-500">
                      제공자: <span className="font-semibold">{service.provider}</span>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-center mt-8">
              <Link to="/service-list">
                <button className="px-8 py-4 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-400">
                  더 보기
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">문의 및 지원</h2>
            <p>궁금한 점이 있으면 언제든 문의하세요!</p>
            <p className="mt-4">
              Email: support@seniorstage.com | Phone: 123-456-7890
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
