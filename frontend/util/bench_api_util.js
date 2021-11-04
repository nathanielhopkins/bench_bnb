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

export const createBench = (bench) => {
  return $.ajax({
    method: 'POST',
    url: '/api/benches',
    data: bench
  })
}

export const fetchBenchReviews = (benchId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/benches/${benchId}/reviews`
  })
}