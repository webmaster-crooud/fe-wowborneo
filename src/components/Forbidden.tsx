import Link from "next/link";

const Forbidden = () => {
  return (
    <div className="w-full p-12">
      <div className="mx-auto mb-6 max-w-md text-center">
        <h3>Akses Diblokir</h3>
        <p className="text-body">
          Silakan anda kembali ke halaman sebelumnya atau ke halaman utama
        </p>
      </div>
      <div className="flex justify-center gap-3">
        <Link href={"/"} className="btn btn-orange-borneo">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Forbidden;
