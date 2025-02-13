export default function Modal({children}: {children: React.ReactNode}) { 
    return (
        <div className="modal">
          <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg max-w-md mx-4">
            {children}
          </div>
        </div>
    );
}