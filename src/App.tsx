import { ArrowRight } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* Top left image - Child with blocks */}
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-lg z-10">
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Child playing with colorful blocks"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom left image - Child writing */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden shadow-lg z-20">
              <img 
                src="https://images.unsplash.com/photo-1544397118-ac5a0a57b834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Child writing and studying"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex">
              <span className="bg-[#c8b8e8] text-[#4a3b6b] px-6 py-3 rounded-full text-sm font-medium">
                An eclectic approach to education
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-[#2a2a4a] leading-tight">
              Our goal is to ensure your little one's success in life
            </h1>

            {/* Description */}
            <p className="text-lg text-[#5a5a6a] leading-relaxed max-w-2xl">
              Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>

            {/* Button */}
            <button className="inline-flex items-center gap-3 bg-[#6b5b95] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#5a4a85] transition-colors duration-200">
              Learn more
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App