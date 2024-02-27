import pika
import json

json_obj = """[
    {
        "Expense Name": "Groceries",
        "Date": "9/13/24",
        "Amount": "100"
    }
]"""
save_path = 'Mock Expense Report.pdf'
data_tuple = (json_obj, save_path)
serialized_tuple = json.dumps(data_tuple)

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()
channel.queue_declare(queue='expense-report')
channel.basic_publish(exchange='',
                      routing_key='expense-report',
                      body=serialized_tuple)
connection.close()
