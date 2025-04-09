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
<code>{`import boto3
import os

def lambda_handler(event, context):
    s3 = boto3.client('s3')
    textract = boto3.client('textract')
    dynamodb = boto3.resource('dynamodb')
    ses = boto3.client('ses')

    # Environment variables
    dynamodb_table = os.environ['DYNAMODB_TABLE']
    sender_email = os.environ['SES_SENDER_EMAIL']
    recipient_email = os.environ['SES_RECIPIENT_EMAIL']

    for record in event['Records']:
        bucket_name = record['s3']['bucket']['name']
        object_key = record['s3']['object']['key']

        # Extract text using Textract
        response = textract.detect_document_text(
            Document={
                'S3Object': {
                    'Bucket': bucket_name,
                    'Name': object_key
                }
            }
        )

        # Process text
        lines = [line['Text'] for line in response['Blocks'] if line['BlockType'] == 'LINE']
        receipt_data = "\\n".join(lines)

        # Store data in DynamoDB
        table = dynamodb.Table(dynamodb_table)
        table.put_item(
            Item={
                'receiptID': object_key,
                'date': record['eventTime'],
                'content': receipt_data
            }
        )

        # Send email via SES
        ses.send_email(
            Source=sender_email,
            Destination={'ToAddresses': [recipient_email]},
            Message={
                'Subject': {'Data': 'Receipt Processed'},
                'Body': {
                    'Text': {'Data': f"Receipt: {object_key}\\n\\n{receipt_data}"}
                }
            }
        )
    
    return {'statusCode': 200, 'body': 'Receipt processed successfully!'}`}</code>
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
                        <p className="font-medium">2 weeks</p>
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
