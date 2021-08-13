import ReactDOM from "react-dom";
import Card from "./MCards";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <div className="heading">
      <h1> Collection of Best Web Series </h1>
    </div>
    <Card
      imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUdqpFJaAn2TXJn5ybft2uTBVR49UiHhXXw&usqp=CAU"
      title="A Netflix original series"
      sname="Dark"
      link="https://www.netflix.com/in/title/80100172"
    />
    <Card
      imgsrc="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/05/25/938590-money-heist.png"
      title="A Netflix original series"
      sname="Money Heist"
      link="https://www.netflix.com/in/title/80192098"
    />
    <Card
      imgsrc="https://vidooly.com/blog/wp-content/uploads/2019/11/narcos.jpeg"
      title="A Netflix original series"
      sname="Narcos"
      link="https://www.netflix.com/in/title/80025172"
    />
    <Card
      imgsrc="https://vidooly.com/blog/wp-content/uploads/2019/11/stranger.jpg"
      title="A Netflix original series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80057281"
    />
    <Card
      imgsrc="https://vidooly.com/blog/wp-content/uploads/2019/11/nd.jpg"
      title="A Netflix original series"
      sname="Breaking Bad"
      link="https://www.netflix.com/in/title/70143836"
    />
    <Card
      imgsrc="https://filmdaily.co/wp-content/uploads/2021/01/netflixluciferquiz-lede.jpeg"
      title="A Netflix original series"
      sname="Lucifer"
      link="https://www.netflix.com/in/title/80057918"
    />
    <Card
      imgsrc="https://wirally.com/wp-content/uploads/2020/02/1-Web-series-on-Amazon-Prime_1.jpg"
      title="Amazon Prime original"
      sname="Jack Ryan"
      link="https://www.primevideo.com/region/eu/detail/Tom-Clancy-s-Jack-Ryan/0I1D4CF0CQFRMWBUNRW3QQ63WP?ref_=dvm_pds_gen_in_as_s_gt_dsaallwebd_mkw_1EJRA0tl-dc_pcrid_%7Badid%7D&mrntrk=slid__pgrid_67214826146_pgeo_9300235_x__ptid_dsa-19959388920"
    />
    <Card
      imgsrc="https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/05/familyman-1621739169.jpg"
      title="Amazon Prime original"
      sname="The family man"
      link="https://www.primevideo.com/detail/0S3QYI59BAEI5KVLHCKSR91YGD/_mkw_s-dc&mrntrk=pcrid_452516200052_slid__pgrid_105713381899_pgeo_9300235_x_129940998600_ptid_dsa-932982753595"
    />

    <h4> Made with 💗 in React </h4>
  </>,rootElement
);
