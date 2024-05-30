const SatriaData = () => {
  return (
    <div className="flex flex-col bg-customWhite flex-grow">
      <div className="h-16 w-full bg-white border-b-2 flex items-center px-4 sm:px-8">
        <p className="text-2xl font-semibold">Satria Data</p>
      </div>

      <div className="p-6 flex flex-grow">
        <div className="bg-white w-full rounded-md border p-6">
          {/*  */}
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-xl font-semibold text-gray-500">Data saat ini belum diperbarui. Silakan tunggu hingga pembaruan tersedia.</h1>
            <h2 className="text-xl font-semibold text-gray-500">Silahkan cari data di <a href="https://github.com/grantgabriel/FasilkomTI-Competition-Archive" className="text-purple underline font-bold">Github</a> jika Anda membutuhkannya segera. </h2>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}

export default SatriaData