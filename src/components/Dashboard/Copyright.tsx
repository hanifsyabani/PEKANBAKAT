
export default function Copyright({ open }: { open: boolean }) {
  return (
    <div className={`${open ? "lg:ml-[5%]" : "lg:ml-[20%]"} transition-all lg:py-20 py-4`}>
      <h1 className="text-center font-bold text-primary">-KM MUBA DASHBOARD-</h1>
      <p className="text-center text-sm text-gray-500">
        © 2024. All rights reserved
      </p>
    </div>
  )
}
