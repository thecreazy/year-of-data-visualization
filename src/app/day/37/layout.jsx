export const metadata = {
  title: 'Day 37 | Immigrants registered in the municipality of Bologna',
  description: `The data refers for each area of the city to the total number of immigrants and officially registered for each year starting from 1973. For the census years and those in which the post-census registry revision takes place, reference is made to the data of Registry records which may not coincide with those from Istat. By immigrants we mean all people coming from other Italian municipalities and from abroad.`,
  openGraph: {
    images: [
      {
        url: 'https://yodv.canellariccardo.it/screen/37.png',
      },
    ],
  },
};

export default function PageLayout({ children }) {
  return children;
}
