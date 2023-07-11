import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import twitter from "../../Assets/Projects/twitter.png";
import suicide from "../../Assets/Projects/suicide.png";
import kanban from "../../Assets/Projects/kanban.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter"
              description="Twitter is a popular social media platform that allows users to post and interact with short messages known as tweets It was created in 2006 and has since become a prominent platform for sharing information news opinions and engaging in online conversations"
              ghLink="https://github.com/lucifersahil0001/twitter_final.git"
              demoLink="https://twitter-final-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="Kanban"
              description="A Kanban board is a visual tool used in project management and task tracking. It provides a clear and organized way to visualize work and progress in various stages of completion. The term Kanban originated from the Japanese manufacturing system specifically the Toyota Production System"
              ghLink="https://github.com/lucifersahil0001/harsh-kanban.git"
              demoLink="https://kanban-project-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gym Project"
              description="Welcome to our state-of-the-art gym website where fitness meets innovation! We offer a dynamic online platform built with React and JavaScript, providing you with an immersive fitness experience right from the comfort of your home Discover a wide range of workout programs, personalized training plans, and expert guidance from certified trainers. Track your progress, set goals, and engage with a vibrant fitness community. With our user-friendly interface and cutting-edge features, achieving your fitness goals has never been easier. Join us on this exciting fitness journey and unlock your full potential today!"
              ghLink="https://github.com/lucifersahil0001/shakti-gym.git"
              demoLink="https://gymwebsiteportfilo-newgym-qxjjzds09-lucifersahil0001.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
