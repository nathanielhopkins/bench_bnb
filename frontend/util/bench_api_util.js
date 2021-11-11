export const fetchBenches = (filters) => {
  return $.ajax({
    method: 'GET' ,
    url: '/api/benches',
    data: filters,
    error: (err) => console.log(err)
  })
}

export const fetchBench = benchId => {
  const url = `/api/benches/${benchId}`
  return $.ajax({
    method: 'GET',
    url: url
  })
}

export const createBench = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/benches',
    data: formData,
    contentType: false,
    processData: false
  })
}

export const fetchBenchReviews = (benchId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/benches/${benchId}/reviews`
  })
}

export const createBenchReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: `/api/benches/${review.benchId}/reviews`,
    data: { review }
  })
}