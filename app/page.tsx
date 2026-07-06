export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-5xl font-bold mb-6">
        AI 简历优化器
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        上传简历，获得 AI 智能评分与优化建议
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg">
        立即开始优化
      </button>
    </main>
  );
}