import prisma from "../../db";
import bcrypt from "bcrypt";

const loginUser = async (data) => {
  let error;
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (!user) {
    error = "Cet email est déja inscrit.";
    return error;
  }
  const passwordMatch = await bcrypt.compare(data.password, user.password);
  if (!passwordMatch) {
    error = "Le mot de passe est érroné.";
    return error;
  }

  return user;
};

export default loginUser;
