import Image from 'next/image';

export const Logo =() => {
    return(
        <div className="flex items-center space-x-2">
              <Image
            height={30}
            width={30}
            alt="AcademyPal"
            src="/logo.svg" />
            <div>
                <h1 className="flex text-xl font-[600] text-slate-900">AcademyPal</h1>
            </div>
        </div>
      
    )
}