import React, { useEffect } from "react";
import Carousel from "react-slick";
import styles from "./SelectCategory.module.css";
import {
  getCategories,
  setCategory,
  setHardness,
  getQuestions
} from "../../actions/quiz";
import { connect } from "react-redux";
import PageWrapper from "../../components/ui/layout/PageWrapper";
import BackButton from "../../components/ui/buttons/BackButton";
import CarouselItem from "./CarouselItem";
import LinkButton from "../../components/ui/buttons/LinkButton";
import HardnessSection from "./HardnessSection";
import Loading from "../../components/ui/layout/Loading";

const SelectCategory = ({
  getCategories,
  quiz: { loading, categories, difficulty, selectedCategory },
  setCategory,
  getQuestions,
  setHardness
}) => {
  const settings = {
    dots: true, // could change
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    getCategories();
  }, [getCategories]);
  if (loading) return <Loading />;

  return (
    <PageWrapper>
      <h1>Pick a category!</h1>
      <BackButton to="/" />
      <div className={styles.Carousel}>
        <Carousel {...settings}>
          <CarouselItem
            selected={selectedCategory === 0}
            category={{ id: 0, name: "Random" }}
            onClick={() => setCategory(0)}
          />
          {categories.map(category => (
            <CarouselItem
              key={category.id}
              selected={selectedCategory === category.id}
              category={category}
              onClick={() => setCategory(category.id)}
            />
          ))}
        </Carousel>
      </div>
      <HardnessSection checked={difficulty} onChange={setHardness} />
      <LinkButton to="/quiz/3" onClick={getQuestions} text="Start Quiz" />
    </PageWrapper>
  );
};

const mapStateToProps = state => ({
  quiz: state.quiz
});

export default connect(mapStateToProps, {
  getCategories,
  setCategory,
  setHardness,
  getQuestions
})(SelectCategory);
