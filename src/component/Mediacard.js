import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const response = await fetch("http://localhost:3000/pages/api/product");
  const data = await response.json();
  return data;
};
export default async function MediaCard() {
  let blogData = await getData();
  blogData = blogData.result;

  if (!blogData || !Array.isArray(blogData)) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "50px",
          justifyContent: "space-between",
          padding: "0 100px",
        }}
      >
        {blogData.map((item, index) => (
          <Link key={index} href={`/blog/${item._id}`} passHref>
            <Card sx={{ maxWidth: 345, boxShadow: "none", border: "none" }}>
              <CardMedia>
                <Image
                  src={item.picture || "https://via.placeholder.com/140"}
                  alt={item.title || "Blog Post"}
                  width={500}
                  height={140}
                  layout="responsive"
                  objectFit="cover"
                />
              </CardMedia>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ color: "text.primary", textDecoration: "none" }}
                >
                  {item.title || "Untitled"}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.shortDescription || "No description available."}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
