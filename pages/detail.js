import { useRouter } from 'next/router'
import Layout from '@components/Layout';
import Container from '@components/Container';
import PostMetaTitle from '@components/PostMetaTitle';
import PostAuthor from '@components/PostAuthor';
import Head from 'next/head';

export default function Detail() {
  const router = useRouter()
  console.log(router);
  return (
    <Layout>
      <Head>
        <title>Detail &mdash; Yosadade</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex items-center flex-col">
          <PostMetaTitle
            category="Wisata"
            date="July 22, 2021"
            title="Tempat favorit menikmati gemerlap malam Jogja"
            center
          />
          <PostAuthor
            authorName="Yosada Dede"
            authorJob="UI Designer"
            authorAvatar="/author-1.png"
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img src="/thumbnail-1.jpg" className="w-full rounded-lg" />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <p className="mb-4">Bukit piyungan berada di Kecamatan Piyungan, Kabupaten Bantul kurang lebih 30 menit dari kota Jogja.</p>
          <p className="mb-4">Beberapa pekan sekali, biasa saya dan rekan - rekan menghabiskan malam disini untuk pelepas penat setelah sepekan bekerja untuk menikmati pemandangan memukau dari kota Jogja yang penuh dengan lampu-lampu yang bersinar di setiapnya dari ketinggian, akan menjadi lebih terasa sempurna lagi ketika ditemani dengan segelas kopi, kudapan dan tawa canda bersama.</p>
          <p className="mb-4">Ini juga bisa dijadikan sebagai sarana tadabur alam untuk lebih mengenal, menghayati, merenungi kebesaran Allah, sehingga dapat menghadirkan rasa syukur atas karuania-Nya serta dapat membantu menjaga melestarikan keberadaannya.</p>
          <p className="mb-4">Sengaja kami memilih hari - hari diluar weekend untuk menghindari keramaian, biar lebih khidmat dan biar lebih santai ya kan. Disini banyak tersedia cafe bernuansa outdoor, tenang harganya cukup terjangkau kok.</p>
          <p className="mb-4">Bagi teman - teman yang membaca ini, kalian harus coba kesini. Melewatkan malam dengan pemandangan malam kota Jogja sambil menikmati berbagai macam kuliner di sekitar lokasi. Kalian akan merasakan pengalaman yang baru.</p>
        </div>
      </Container>
    </Layout>
  );
}
