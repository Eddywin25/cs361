# PDF Generator Microservice
The purpose of this microservice is to take a JSON object and convert it a PDF file. The microservice will save the converted PDF to a location specified by the user.

This process runs based on two scripts: receive_json.py and json_to_pdf.py. 
- receive_json.py: a receiver program. When running, this program waits for a request to be sent to a queue. The queue is set up as 'expense-report',
  but the user is free to rename the queue. Once a response is received into the queue, receive_json.py will deserialize the body of the response. The deserialized body
  returns a JSON object and file path. The JSON object and file path are then passed as arguements to a function called json_to_pdf, which is being imported from the json_to_pdf.py file.
  The json_to_pdf function will convert the JSON object to a PDF file and save it to the file path.
- json_to_pdf.py: a module that contains the code needed to convert a JSON object to PDF.

I have included an additional file called send_json.py, which can be used as a basis for implementing a send routine in your project.

Below you will find a simple UML sequence diagram summarizing the steps laid out above.

### PDF Generator UML:
![PDF Generator Microservice](https://github.com/Eddywin25/cs361_project/assets/122498237/ffd62757-8952-45e3-ac1f-b6df4385769c)
