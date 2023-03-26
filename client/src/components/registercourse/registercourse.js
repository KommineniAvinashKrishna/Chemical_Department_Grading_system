import React,{useState,useEffect} from "react";
import { useNavigate,useParamsLink,Link} from "react-router-dom";
import axios from "axios";

const intialState={
    courseid:"",
    co_count:0,
    student_count:0
};



function Testing (){
    const [state,setState]=useState(intialState);  
     const {courseid,co_count,student_count}=state;
     const history=useNavigate();
    

     const [tableData, setTableData] = useState([
        {courseid:'', co_id: '', co_type: '' }
      ]);
      const [tableData1, setTableData1] = useState([
        {courseid:'', student_id: '', student_name: '' }
      ]);
      
      const handleinputChange = (index, event) => {
        const values = [...tableData];
        values[index][event.target.name] = event.target.value;
        setTableData(values);
      };
      const handleinputChange1 = (index, event) => {
        const values = [...tableData1];
        values[index][event.target.name] = event.target.value;
        setTableData1(values);
      };
      const handleRemoveRow = (index) => {
        const values = [...tableData];
        values.splice(index, 1);
        setTableData(values);
      };
      const handleRemoveRow1 = (index) => {
        const values = [...tableData1];
        values.splice(index, 1);
        setTableData1(values);
      };



     const handleSubmit=(e)=>{
        
            e.preventDefault();

            for(let i=0;i<tableData.length;i++)
            {
              tableData[i].courseid=courseid;
            }
            for(let i=0;i<tableData.length;i++)
            {
              tableData1[i].courseid=courseid;
            } 
            console.log(tableData);
            console.log(tableData1);
            if(!courseid||!co_count||!student_count)
             {
              //toast.error("Please provide value into each input field");

             }
             else
             {
              axios
              .post("http://localhost:4000/registercourse",{
                  courseid,co_count,student_count
              })
              .then(()=>{
                  setState({co_count:0,student_count:0});
              })
              


                axios
                .post("http://localhost:4000/cotable",{
                    tableData,courseid
                })
                axios
                .post("http://localhost:4000/student_table",{
                    tableData1
                })

                 setTimeout(()=>{history("/home")},500);
             }
     }

     const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setState({...state,[name]:value});


     };

     const handleAddRow=()=>{
      const newRow={courseid:"",co_id:"",co_type:""};
      setTableData([...tableData,newRow]);
     }
     const handleAddRow1=()=>{
      const newRow={courseid:"",student_id:"",student_name:""};
      setTableData1([...tableData1,newRow]);
     }

    return(
        <div style={{marginTop:"100px"}}>
            <form style={{
                margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center"
            }}
            onSubmit={handleSubmit}
            
            >
                <label htmlFor="course_id">Course Id</label>
                <input
                type="text"
                id="courseid"
                name="courseid"
                value={courseid}
                onChange={handleInputChange}
                />
                       <br></br>
                <label htmlFor="co_count">Number of Co</label>
                <input
                type="number"
                id="co_count"
                name="co_count"
                value={co_count}
                onChange={handleInputChange}
                />
                       <br></br>
                <label htmlFor="student_count">Student Count</label>
         

                <input
                type="number"
                id="student_count"
                name="student_count"
                value={student_count}
                onChange={handleInputChange}
                />
                
                <div>
          <table>
            <thead>
              <tr>
                <th> Co name</th>
                <th>Co description</th>
                <th>Action</th>
             </tr>
             </thead>
                <tbody>
                    {tableData.map((rowData, index) => (
                    <tr key={index}>
                     <td>
                        <input type="text" name="co_id" value={rowData.co_id} onChange={(event) => handleinputChange(index, event)} />
                     </td>
                     <td>
                        <input type="text" name="co_type" value={rowData.co_type} onChange={(event) => handleinputChange(index, event)} />
                     </td>
                     <td>
                        <button onClick={() => handleRemoveRow(index)}>Remove</button>
                     </td>
                    </tr>
                    ))}
                </tbody>
                
  
         </table>

         <table>
            <thead>
              <tr>
                <th> Student Roll No</th>
                <th>Student Name</th>
                <th>Action</th>
             </tr>
             </thead>
                <tbody>
                    {tableData1.map((rowData, index) => (
                    <tr key={index}>
                     <td>
                        <input type="text" name="student_id" value={rowData.student_id} onChange={(event) => handleinputChange1(index, event)} />
                     </td>
                     <td>
                        <input type="text" name="student_name" value={rowData.student_name} onChange={(event) => handleinputChange1(index, event)} />
                     </td>
                     <td>
                        <button onClick={() => handleRemoveRow1(index)}>Remove</button>
                     </td>
                    </tr>
                    ))}
                </tbody>
                
  
         </table>
                </div>            
                <br></br>
                <input type="submit" value="Submit"/>
               
            </form>
            <button onClick={handleAddRow}>Add CO</button>
            <button onClick={handleAddRow1}>Add Student</button>
        </div>

    );
};
export default Testing;

