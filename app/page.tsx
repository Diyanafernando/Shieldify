import Image from "next/image";
import { Input } from "@/components/ui/input"


export default function Home() {
  return (
 <div className="flex flex-col bg-slate-50 min-h-screen py-10">
    <div className="w-full max-w-4xl mx-auto px-6 text-center">
      <h1 className="text-4xl text-emerald-500 mb-9 font-bold">
        Free website malware and security checker
      </h1>
      
      <p className="text-gray-700 mb-7 text-lg">
        Enter a URL like example.com and the Sucuri SiteCheck scanner will check the website for known malware, viruses, blacklisting status, website errors, out-of-date software, and malicious code.
      </p>
      
      <Input type="url" placeholder="Enter URL" className="mb-10" />
    </div>
    
    <div className="w-full max-w-6xl mx-auto px-6">
      
      {/* 4 Simple Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500">
          <p className="text-gray-500 text-sm">Total Scans</p>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">2,543</h3>
          <p className="text-emerald-500 text-sm mt-1">↑ 12% increase</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500">
          <p className="text-gray-500 text-sm">Clean Sites</p>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">2,416</h3>
          <p className="text-emerald-500 text-sm mt-1">95% success</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500">
          <p className="text-gray-500 text-sm">Threats Blocked</p>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">127</h3>
          <p className="text-emerald-500 text-sm mt-1">This month</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500">
          <p className="text-gray-500 text-sm">Active Users</p>
          <h3 className="text-3xl font-bold text-gray-800 mt-2">892</h3>
          <p className="text-emerald-500 text-sm mt-1">Online now</p>
        </div>
      </div>


      {/* Simple Ratings/Progress Bars */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Security Ratings</h2>
        
        {/* Rating 1 */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-medium">Malware Protection</span>
            <span className="text-emerald-600 font-bold">95%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-emerald-500 h-4 rounded-full" style={{width: '95%'}}></div>
          </div>
        </div>

        {/* Rating 2 */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-medium">Clean Websites</span>
            <span className="text-emerald-600 font-bold">98%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-emerald-500 h-4 rounded-full" style={{width: '98%'}}></div>
          </div>
        </div>

        {/* Rating 3 */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700 font-medium">Security Score</span>
            <span className="text-emerald-600 font-bold">92%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-emerald-500 h-4 rounded-full" style={{width: '92%'}}></div>
          </div>
        </div>

        {/* Rating 4 */}
        <div>
          <div className="flex justify-between mb-2">
            <div className="text-gray-700 font-medium">User Satisfaction</div>
            <div className="text-emerald-600 font-bold">97%</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-emerald-500 h-4 rounded-full" style={{width: '97%'}}></div>
          </div>
        </div>
      </div>

    </div>

 </div>
  );
}