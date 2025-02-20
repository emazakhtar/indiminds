export function fetchAllChart() {
  return new Promise(async (resolve) => {
    // TODO: we will not hardcode server url here
    const response = await fetch("http://localhost:3000/chart", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}
