import {
  BlogBackground,
  Title,
  BlogItem,
  BlogImage,
  Date,
  BlogTitle,
  SeeBtn,
} from './Blog.styled';
import img1 from '../../assets/blog-img-1-min.jpg';
import img2 from '../../assets/blog-img-2-min.jpg';
import img3 from '../../assets/blog-img-3-min.jpg';

const Blog = () => {
  return (
    <BlogBackground>
      <Title>Our latest blog posts</Title>

      <ul>
        <BlogItem>
          <BlogImage src={img1} alt="Image1" width={330} height={440} />
          <Date>September, 22 2023</Date>
          <BlogTitle>
            Tennis ball buying guide: Everything you need to know
          </BlogTitle>
          <SeeBtn>Read more...</SeeBtn>
        </BlogItem>

        <BlogItem>
          <BlogImage src={img2} alt="Image2" width={330} height={440} />
          <Date>September, 22 2023</Date>
          <BlogTitle>
            Tennis ball buying guide: Everything you need to know
          </BlogTitle>
          <SeeBtn>Read more...</SeeBtn>
        </BlogItem>

        <BlogItem>
          <BlogImage src={img3} alt="Image3" width={330} height={440} />
          <Date>September, 22 2023</Date>
          <BlogTitle>
            Tennis ball buying guide: Everything you need to know
          </BlogTitle>
          <SeeBtn>Read more...</SeeBtn>
        </BlogItem>
      </ul>
    </BlogBackground>
  );
};
export default Blog;
