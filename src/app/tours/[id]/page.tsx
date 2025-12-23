import TourDetails from "view/tour-details/TourDetails";

export  const Page = ({ params }: { params: { id: string } }) =>  <TourDetails id={params.id} />

export default Page;