import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Dashboard() {
  const stats = [
    { label: "예상 매칭 성공률", value: "87%" },
    { label: "현재 등록된 시니어", value: "12명" },
    { label: "제공 가능한 서비스", value: "8개 분야" },
    { label: "플랫폼 총 사용자", value: "62명" },
    { label: "평균 리뷰 점수", value: "4.8/5" },
  ];

  const barChartData = [
    { name: "1월", 매칭성공률: 60, 참여율: 45, 활동성: 30 },
    { name: "2월", 매칭성공률: 65, 참여율: 50, 활동성: 40 },
    { name: "3월", 매칭성공률: 70, 참여율: 55, 활동성: 50 },
    { name: "4월", 매칭성공률: 78, 참여율: 60, 활동성: 65 },
    { name: "5월", 매칭성공률: 87, 참여율: 72, 활동성: 80 },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">플랫폼 대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-md rounded-md text-center hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              {stat.value}
            </h2>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 그래프 섹션 */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">매칭 성공률 및 활동 추이</h2>
        <div className="w-full bg-gray-50 shadow-md rounded-md p-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="매칭성공률" fill="#4F46E5" />
              <Bar dataKey="참여율" fill="#34D399" />
              <Bar dataKey="활동성" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
