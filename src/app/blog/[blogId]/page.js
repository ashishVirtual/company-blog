"use client";
import { getBlogData } from "@/redux/slice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function BlogId({ params }) {
  const dispatch = useDispatch();

  const { blogId } = useParams(params);

  useEffect(() => {
    dispatch(getBlogData());
  }, [dispatch]);

  const blogData = useSelector((state) => state.blog.blog.result);

  if (!params || !blogData) {
    return <p>Loading...</p>;
  }

  const selectedBlog = blogData.find((item) => item._id == blogId);

  if (!selectedBlog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "20px",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      {selectedBlog.picture && (
        <Image
          src={selectedBlog.picture}
          alt={selectedBlog.title || "Blog Post Image"}
          width={1920}
          height={0}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      )}

      <h1 style={{ margin: "10px 0", fontWeight: 900 }}>
        {selectedBlog.title}
      </h1>

      <p style={{ fontSize: "1.2rem", lineHeight: "1.8", marginTop: "10px" }}>
        {selectedBlog.longDescription}
      </p>
    </div>
  );
}
