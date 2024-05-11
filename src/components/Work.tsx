export default function Work() {


    const work = [
      {
          _id: '4',
          title: "Project 4",
          rate: "100",
          client: "Sam Disuja",
          description: "This is a project description"
      },
      {
          _id: '5',
          title: "Project 5",
          rate: "100",
          client: "Sam Disuja",
          description: "This is a project description"
      },
    ]
  
  
    return (
      <>
        {work.map((work, index) => (
          
          <div key={work._id}>
          <div className="col">
              <h5 className="m-b-10 f-w-600">{work.title}</h5>
              <h6 className="text-muted f-w-400">{work.rate}</h6>
              <p>{work.description}</p>
              <hr style={{ width: "70%", borderColor: "#AAA" }} />
          </div>
          </div>
          
        ))}
      </>
    );
  }