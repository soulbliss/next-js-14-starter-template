type YearReview = {
  id: number;
  year_number: number;
  user_id: number;
  status: 'not-started' | 'in-progress' | 'completed';
  timestamp: Date; // Assuming you want to represent timestamp as JavaScript Date object
};
