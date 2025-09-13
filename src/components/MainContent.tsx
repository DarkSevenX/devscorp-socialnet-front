export const MainContent = () => {
  return (
    <main className="flex-1 md:mx-64 lg:mx-80 overflow-y-auto bg-black">
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        
        <div className="p-4 space-y-4 border-b-1 border-gray-900">
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt=""/>
            <div>
              <p className="font-semibold">Keyla Poloh · #29</p>
              <p className="text-xs text-gray-400">Hace 2h</p>
            </div>
          </div>
          <img className="w-full rounded-lg" src="https://via.placeholder.com/600x300" alt=""/>
          <p className="text-gray-300 text-sm">
            Supporting line text lorem ipsum dolor sit amet consectetur...
          </p>
          <div className="flex justify-between text-gray-400 text-sm">
            <span>💬 100+</span>
            <span>❤️ 383</span>
            <span>🔁 893</span>
            <span>📤</span>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt=""/>
            <div>
              <p className="font-semibold">Juan Salazar</p>
              <p className="text-xs text-gray-400">Hace 5h</p>
            </div>
          </div>
          <img className="w-full rounded-lg" src="https://via.placeholder.com/600x400" alt=""/>
          <div className="flex justify-between text-gray-400 text-sm">
            <span>💬 24</span>
            <span>❤️ 80</span>
            <span>🔁 12</span>
            <span>📤</span>
          </div>
        </div>
        
      </div>
    </main>
  )
}

