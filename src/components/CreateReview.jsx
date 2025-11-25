import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client/react";
import CreateReviewForm from "./CreateReviewForm";
import { CREATE_REVIEW } from "../graphql/mutations";
import { ME } from "../graphql/queries";

const CreateReview = () => {
  const [mutate] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const handleCreateReview = async (values) => {
    const { ownerName, repoName, rating, review } = values;
    try {
      const { data } = await mutate({
        variables: {
          review: {
            ownerName,
            repositoryName: repoName,
            rating: Number(rating),
            text: review,
          },
        },
        refetchQueries: [{ query: ME, variables: { includeReviews: true } }],
      });
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch (e) {
      console.error(e);
    }
  };
  return <CreateReviewForm onSubmit={handleCreateReview} />;
};

export default CreateReview;
