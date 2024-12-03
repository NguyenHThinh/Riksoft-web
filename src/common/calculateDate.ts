const formatPostDate = (postDate: string) => {
  postDate = postDate || new Date().toISOString();

  const now = new Date();
  const datePosted = new Date(postDate) || new Date().toISOString();
  const diffTime = Math.abs(now.getTime() - datePosted.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if (diffDays > 10) {
    return formatDate(datePosted);
  } else {
    return diffDays;
  }
};

export default formatPostDate;
