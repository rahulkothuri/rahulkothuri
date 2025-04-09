import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronLeft, 
  FileText, 
  Calendar, 
  Clock, 
  Database, 
  Mail, 
  Server, 
  Cloud
} from "lucide-react";
import { projectsData } from "../data/projectsData";
import NotFound from "./NotFound";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === Number(id));

  if (!project) {
    return <NotFound />;
  }

  // For project 1 (Automated Receipt Processing System), show the specialized content
  if (project.id === 1) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <section className="bg-gradient-to-r from-aws-blue to-cloud-dark text-white py-16">
          <div className="section-container">
            <div className="flex items-center mb-6">
              <Link to="/projects">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects
                </Button>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-xl flex items-center justify-center">
                <FileText className="h-12 w-12 md:h-16 md:w-16 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Automated Receipt Processing System</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="cloud-card p-8">
                <h2 className="text-2xl font-bold mb-4 text-aws-blue">Introduction</h2>
                <p className="text-gray-700 mb-4">
                  The Automated Receipt Processing System is designed to streamline the organization and management of paper receipts by leveraging AWS services. It automates the process of uploading receipts, extracting key details, storing the data in a structured database, and sending summary emails. This project is efficient, scalable, and uses AWS's free tier.
                </p>
              </div>
              
              <div className="cloud-card p-8">
                <h2 className="text-2xl font-bold mb-4 text-aws-blue">Project Architecture</h2>
                <p className="text-gray-700 mb-4">
                  The system utilizes the following AWS services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Amazon S3:</strong> For uploading and storing receipt files.</li>
                  <li><strong>Amazon Textract:</strong> To extract text details from receipts.</li>
                  <li><strong>Amazon DynamoDB:</strong> To store and organize extracted receipt data.</li>
                  <li><strong>Amazon SES:</strong> To send email summaries of processed receipts.</li>
                  <li><strong>AWS Lambda:</strong> To automate the process of connecting all services.</li>
                </ul>
                
                <div className="mt-6 bg-gradient-to-r from-cloud-light to-white border border-gray-200 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                      <Cloud className="h-10 w-10 text-aws-blue mb-2" />
                      <h3 className="font-medium text-center">S3 Storage</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                      <Database className="h-10 w-10 text-aws-blue mb-2" />
                      <h3 className="font-medium text-center">DynamoDB</h3>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                      <Mail className="h-10 w-10 text-aws-blue mb-2" />
                      <h3 className="font-medium text-center">SES Email</h3>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm max-w-xs">
                      <Server className="h-10 w-10 text-aws-blue mb-2" />
                      <h3 className="font-medium text-center">Lambda Function</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cloud-card p-8">
                <h2 className="text-2xl font-bold mb-6 text-aws-blue">Step-by-Step Implementation</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-aws-blue">1. Create an S3 Bucket</h3>
                    <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                      <li>Navigate to the <strong>Amazon S3</strong> console.</li>
                      <li>Click on <strong>Create Bucket</strong>.</li>
                      <li>Enter a unique bucket name, e.g., <code className="bg-gray-100 px-1 rounded">automated-receipts-&lt;your-username&gt;</code>.</li>
                      <li>Keep other settings as default and click <strong>Create Bucket</strong>.</li>
                      <li>Inside the bucket, create a folder named <code className="bg-gray-100 px-1 rounded">incoming</code> to organize receipt uploads.</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-aws-blue">2. Set Up DynamoDB</h3>
                    <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                      <li>Go to the <strong>DynamoDB</strong> console.</li>
                      <li>Click <strong>Create Table</strong>.</li>
                      <li>Configure the table as follows:
                        <ul className="list-disc pl-6 mt-1">
                          <li>Table Name: <code className="bg-gray-100 px-1 rounded">receipts</code></li>
                          <li>Partition Key: <code className="bg-gray-100 px-1 rounded">receiptID</code> (Type: String)</li>
                          <li>Sort Key: <code className="bg-gray-100 px-1 rounded">date</code> (Type: String)</li>
                        </ul>
                      </li>
                      <li>Leave other settings as default and click <strong>Create Table</strong>.</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-aws-blue">3. Configure SES</h3>
                    <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                      <li>Navigate to the <strong>Amazon SES</strong> console.</li>
                      <li>Go to <strong>Configuration</strong> {'>'} <strong>Identities</strong>.</li>
                      <li>Click <strong>Create Identity</strong> and select <strong>Email Address</strong>.</li>
                      <li>Enter your email address and click <strong>Create Identity</strong>.</li>
                      <li>Check your email for a verification link and confirm the email address.</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-aws-blue">4. Create an IAM Role</h3>
                    <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                      <li>Go to the <strong>IAM</strong> console.</li>
                      <li>Click <strong>Roles</strong> and then <strong>Create Role</strong>.</li>
                      <li>Select <strong>AWS Service</strong> as the trusted entity type and choose <strong>Lambda</strong>.</li>
                      <li>Click <strong>Next</strong> and attach the following policies:
                        <ul className="list-disc pl-6 mt-1">
                          <li>AmazonS3ReadOnlyAccess</li>
                          <li>AmazonTextractFullAccess</li>
                          <li>AmazonDynamoDBFullAccess</li>
                          <li>AmazonSESFullAccess</li>
                          <li>AWSLambdaBasicExecutionRole</li>
                        </ul>
                      </li>
                      <li>Name the role <code className="bg-gray-100 px-1 rounded">receipt-processing-lambda-role</code> and click <strong>Create Role</strong>.</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-aws-blue">5. Create a Lambda Function</h3>
                    <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                      <li>Navigate to the <strong>Lambda</strong> console.</li>
                      <li>Click <strong>Create Function</strong> and select <strong>Author from scratch</strong>.</li>
                      <li>Configure as follows:
                        <ul className="list-disc pl-6 mt-1">
                          <li>Function Name: <code className="bg-gray-100 px-1 rounded">receipt-processor</code></li>
                          <li>Runtime: Python 3.9</li>
                          <li>Permissions: Use the existing role <code className="bg-gray-100 px-1 rounded">receipt-processing-lambda-role</code>.</li>
                        </ul>
                      </li>
                      <li>After creation, go to the <strong>Configuration</strong> tab and update:
                        <ul className="list-disc pl-6 mt-1">
                          <li>Timeout: 3 minutes (under <strong>General Configuration</strong>).</li>
                          <li>Environment Variables:
                            <ul className="list-disc pl-6 mt-1">
                              <li><code className="bg-gray-100 px-1 rounded">DYNAMODB_TABLE</code>: <code className="bg-gray-100 px-1 rounded">receipts</code></li>
                              <li><code className="bg-gray-100 px-1 rounded">SES_SENDER_EMAIL</code>: &lt;your-verified-email&gt;</li>
                              <li><code className="bg-gray-100 px-1 rounded">SES_RECIPIENT_EMAIL</code>: &lt;your-verified-email&gt;</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>Paste the Lambda function code into the code editor and deploy the function.</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-aws-blue">6. Set Up S3 Event Notification</h3>
                    <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                      <li>Go back to the <strong>S3</strong> bucket.</li>
                      <li>Navigate to the <strong>Properties</strong> tab.</li>
                      <li>Scroll to <strong>Event Notifications</strong> and click <strong>Create Event Notification</strong>.</li>
                      <li>Configure as follows:
                        <ul className="list-disc pl-6 mt-1">
                          <li>Name: <code className="bg-gray-100 px-1 rounded">receipt-upload-event</code></li>
                          <li>Prefix: <code className="bg-gray-100 px-1 rounded">incoming/</code></li>
                          <li>Event Types: <strong>All object create events</strong></li>
                          <li>Destination: Select <strong>Lambda Function</strong> and choose <code className="bg-gray-100 px-1 rounded">receipt-processor</code>.</li>
                        </ul>
                      </li>
                      <li>Save the configuration.</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div className="cloud-card p-8">
                <h2 className="text-2xl font-bold mb-4 text-aws-blue">Lambda Function Code</h2>
                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-white text-sm">
<code>{`import json
import os
import boto3
import uuid
from datetime import datetime
import urllib.parse

# Initialize AWS clients
s3 = boto3.client('s3')
textract = boto3.client('textract')
dynamodb = boto3.resource('dynamodb')
ses = boto3.client('ses')

# Environment variables
DYNAMODB_TABLE = os.environ.get('DYNAMODB_TABLE', 'Receipts')
SES_SENDER_EMAIL = os.environ.get('SES_SENDER_EMAIL', 'your-email@example.com')
SES_RECIPIENT_EMAIL = os.environ.get('SES_RECIPIENT_EMAIL', 'recipient@example.com')

def lambda_handler(event, context):
    try:
        # Get the S3 bucket and key from the event
        bucket = event['Records'][0]['s3']['bucket']['name']
        # URL decode the key to handle spaces and special characters
        key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'])

        print(f"Processing receipt from {bucket}/{key}")

        # Verify the object exists before proceeding
        try:
            s3.head_object(Bucket=bucket, Key=key)
            print(f"Object verification successful: {bucket}/{key}")
        except Exception as e:
            print(f"Object verification failed: {str(e)}")
            raise Exception(f"Unable to access object {key} in bucket {bucket}: {str(e)}")

        # Step 1: Process receipt with Textract
        receipt_data = process_receipt_with_textract(bucket, key)

        # Step 2: Store results in DynamoDB
        store_receipt_in_dynamodb(receipt_data, bucket, key)

        # Step 3: Send email notification
        send_email_notification(receipt_data)

        return {
            'statusCode': 200,
            'body': json.dumps('Receipt processed successfully!')
        }
    except Exception as e:
        print(f"Error processing receipt: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps(f'Error: {str(e)}')
        }

def process_receipt_with_textract(bucket, key):
    """Process receipt using Textract's AnalyzeExpense operation"""
    try:
        print(f"Calling Textract analyze_expense for {bucket}/{key}")
        response = textract.analyze_expense(
            Document={
                'S3Object': {
                    'Bucket': bucket,
                    'Name': key
                }
            }
        )
        print("Textract analyze_expense call successful")
    except Exception as e:
        print(f"Textract analyze_expense call failed: {str(e)}")
        raise

    # Generate a unique ID for this receipt
    receipt_id = str(uuid.uuid4())

    # Initialize receipt data dictionary
    receipt_data = {
        'receipt_id': receipt_id,
        'date': datetime.now().strftime('%Y-%m-%d'),  # Default date
        'vendor': 'Unknown',
        'total': '0.00',
        'items': [],
        's3_path': f"s3://{bucket}/{key}"
    }

    # Extract data from Textract response
    if 'ExpenseDocuments' in response and response['ExpenseDocuments']:
        expense_doc = response['ExpenseDocuments'][0]

        # Process summary fields (TOTAL, DATE, VENDOR)
        if 'SummaryFields' in expense_doc:
            for field in expense_doc['SummaryFields']:
                field_type = field.get('Type', {}).get('Text', '')
                value = field.get('ValueDetection', {}).get('Text', '')

                if field_type == 'TOTAL':
                    receipt_data['total'] = value
                elif field_type == 'INVOICE_RECEIPT_DATE':
                    # Try to parse and format the date
                    try:
                        receipt_data['date'] = value
                    except:
                        # Keep the default date if parsing fails
                        pass
                elif field_type == 'VENDOR_NAME':
                    receipt_data['vendor'] = value

        # Process line items
        if 'LineItemGroups' in expense_doc:
            for group in expense_doc['LineItemGroups']:
                if 'LineItems' in group:
                    for line_item in group['LineItems']:
                        item = {}
                        for field in line_item.get('LineItemExpenseFields', []):
                            field_type = field.get('Type', {}).get('Text', '')
                            value = field.get('ValueDetection', {}).get('Text', '')

                            if field_type == 'ITEM':
                                item['name'] = value
                            elif field_type == 'PRICE':
                                item['price'] = value
                            elif field_type == 'QUANTITY':
                                item['quantity'] = value

                        # Add to items list if we have a name
                        if 'name' in item:
                            receipt_data['items'].append(item)

    print(f"Extracted receipt data: {json.dumps(receipt_data)}")
    return receipt_data

def store_receipt_in_dynamodb(receipt_data, bucket, key):
    """Store the extracted receipt data in DynamoDB"""
    try:
        table = dynamodb.Table(DYNAMODB_TABLE)

        # Convert items to a format DynamoDB can store
        items_for_db = []
        for item in receipt_data['items']:
            items_for_db.append({
                'name': item.get('name', 'Unknown Item'),
                'price': item.get('price', '0.00'),
                'quantity': item.get('quantity', '1')
            })

        # Create item to insert
        db_item = {
            'receipt_id': receipt_data['receipt_id'],
            'date': receipt_data['date'],
            'vendor': receipt_data['vendor'],
            'total': receipt_data['total'],
            'items': items_for_db,
            's3_path': receipt_data['s3_path'],
            'processed_timestamp': datetime.now().isoformat()
        }

        # Insert into DynamoDB
        table.put_item(Item=db_item)
        print(f"Receipt data stored in DynamoDB: {receipt_data['receipt_id']}")
    except Exception as e:
        print(f"Error storing data in DynamoDB: {str(e)}")
        raise

def send_email_notification(receipt_data):
    """Send an email notification with receipt details"""
    try:
        # Format items for email
        items_html = ""
        for item in receipt_data['items']:
            name = item.get('name', 'Unknown Item')
            price = item.get('price', 'N/A')
            quantity = item.get('quantity', '1')
            items_html += f"<li>{name} -\${price} x {quantity}</li>"

        if not items_html:
            items_html = "<li>No items detected</li>"

        # Create email body
        html_body = f"""
        <html>
        <body>
            <h2>Receipt Processing Notification</h2>
            <p><strong>Receipt ID:</strong> {receipt_data['receipt_id']}</p>
            <p><strong>Vendor:</strong> {receipt_data['vendor']}</p>
            <p><strong>Date:</strong> {receipt_data['date']}</p>
            <p><strong>Total Amount:</strong> \${receipt_data['total']}</p>
            <p><strong>S3 Location:</strong> {receipt_data['s3_path']}</p>

            <h3>Items:</h3>
            <ul>
                {items_html}
            </ul>

            <p>The receipt has been processed and stored in DynamoDB.</p>
        </body>
        </html>
        """

        # Send email using SES
        ses.send_email(
            Source=SES_SENDER_EMAIL,
            Destination={
                'ToAddresses': [SES_RECIPIENT_EMAIL]
            },
            Message={
                'Subject': {
                    'Data': f"Receipt Processed: {receipt_data['vendor']} - \${receipt_data['total']}"
                },
                'Body': {
                    'Html': {
                        'Data': html_body
                    }
                }
            }
        )

        print(f"Email notification sent to {SES_RECIPIENT_EMAIL}")
    except Exception as e:
        print(f"Error sending email notification: {str(e)}")
        # Continue execution even if email fails
        print("Continuing execution despite email error")`}</code>
                  </pre>
                </div>
              </div>
              
              <div className="cloud-card p-8">
                <h2 className="text-2xl font-bold mb-4 text-aws-blue">Conclusion</h2>
                <p className="text-gray-700">
                  The Automated Receipt Processing System efficiently organizes receipts by integrating multiple AWS services. This project can be further extended with advanced analytics or a front-end dashboard to visualize receipt data.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="cloud-card p-6">
                  <h3 className="text-lg font-semibold mb-4 text-aws-blue">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-aws-blue mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Completion Date</p>
                        <p className="font-medium">April 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-aws-blue mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">2 hours</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Prerequisites</p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>An active AWS account</li>
                        <li>Basic knowledge of AWS services</li>
                        <li>Familiarity with Python</li>
                        <li>A verified email in AWS SES</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="cloud-card p-6">
                  <h3 className="text-lg font-semibold mb-4 text-aws-blue">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-aws-gray text-aws-blue text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="cloud-card p-6 bg-gradient-to-br from-aws-blue to-cloud-dark text-white">
                  <h3 className="text-lg font-semibold mb-4">Have a question?</h3>
                  <p className="text-sm mb-4">
                    If you'd like to learn more about this project or discuss how we could work together, feel free to reach out.
                  </p>
                  <a
                    href="https://linktr.ee/rahulkothuri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-white text-aws-blue hover:bg-white/90">
                      Contact Me
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  // For other projects, display a generic template
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-aws-blue to-cloud-dark text-white py-16">
        <div className="section-container">
          <div className="flex items-center mb-6">
            <Link to="/projects">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-xl flex items-center justify-center">
              {project.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-white/10 text-white text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="cloud-card p-8">
          <h2 className="text-2xl font-bold mb-4 text-aws-blue">Project Details</h2>
          <p className="text-gray-700">
            {project.description}
          </p>
          <p className="text-gray-700 mt-4">
            Detailed documentation for this project is coming soon. Please check back later or contact me for more information.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
