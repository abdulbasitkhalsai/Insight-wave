import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="parentContainer">
      <div className="childContainer">
      <div className="alignbox">
      <input type="text" className="searchBar" placeholder="Search"/><button className="searchButton">Search</button>
      </div>
      <Link href={"/tech-update"}>
      <div className="blog">
          <div className="img"><Image src={"/blog4.webp"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">Tech Update</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore"><span>Read More</span></button>     
        </div>
      </Link>
      <Link href={"/online-learning-revolution"}>
          <div className="blog">
          <div className="img"><Image src={"/online-learning.avif"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">Online Learning Revolution</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore">Read More</button>     
        </div>
      </Link>
      <Link href={"/work-life-harmony"}>
        <div className="blog">
          <div className="img"><Image src={"/work-life.jpg"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">Work-Life Harmony</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore">Read More</button>     
        </div>
      </Link>  
      <Link href={"/the-full-path"}>
        <div className="blog">
          <div className="img"><Image src={"/roadmap.jpg"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">The Full Stack Path</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore">Read More</button>     
        </div>
      </Link>
      <Link href={"/nail-your-niche"}>
        <div className="blog">
          <div className="img"><Image src={"/niche.jpg"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">Nail Your Niche</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore">Read More</button>     
        </div>
      </Link>
      <Link href={"/ai-for-beginners"}>
        <div className="blog">
          <div className="img"><Image src={"/ai-beginner.png"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">AI for Beginners</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore">Read More</button>     
        </div>
      </Link>
      <Link href={"innovation-through-teamwork"}>
        <div className="blog">
          <div className="img"><Image src={"/brainstroming.jpg"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">Innovation Through Teamwork</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore">Read More</button>     
        </div>
      </Link>
      <Link href={"break-the-fear"}>
        <div className="blog">
          <div className="img"><Image src={"/fear.jpg"} alt="Sample Image" width={450} height={200}></Image></div>
            <h2 className="title">Break the Fear</h2>
            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, molestias.</div>       
            <button className="readMore">Read More</button>     
        </div>        
      </Link>
      </div>
    </div>
    );
}
