<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Website Delivery with CloudFront

<img width="1286" height="268" alt="architecture-complete" src="https://github.com/user-attachments/assets/32b5bfd1-e31f-44ba-8348-5d0c1f791fa2" />


**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-cloudfront)

**Author:** Jimil Prabtani  
**Email:** jimilprabtani0816@gmail.com

---

## Website Delivery with CloudFront

![Image](http://learn.nextwork.org/affectionate_green_mysterious_penguin/uploads/aws-networks-cloudfront_1dddddwe)

---

## Introducing Today's Project!

In this project, I will demonstrate my system design's skill by using AWS CloudFront to understand the CDNs {Content Delivery Networks} and S3 storage to store our website files and securely host it. I'm doing this project to learn and develop my cloud security engineering skills in AWS.

### Tools and concepts

Services I used were. S3 Storage Bucket to store the website files and CloudFront a global content delivery network (CDN) to host the website securely. Also used WAF and DDoS protection to defend against layer 7 attackes.

### Project reflection

This project took me approximately 1 hour.

I chose to do this project today because I am familiar with Azure but, I wanted to get my hands dirty with AWS. Something that would make learning with NextWork even better is Documenting each step in the process.

---

## Set Up S3 and Website Files

I started the project by creating an S3 bucket to store our website files. I can't use CloudFront for this task because it is a global content delivery network not a storage solution.

The three files that make up my website are index.html, which is the main file for my website It's where we organise the text, pictures, and everything that makes up your webpage. Style.css, which is where we write down the visual appearance of our website's HTML elements. It controls everything from font sizes and colors to layout designs, helping us keep a consistent style across the website. and Script.js, which refers to a JavaScript file that adds interaction to our website. Also, website files = no live website.

I validated that my website files work by downloading them and running them to see if they are the actual website files.

![Image](http://learn.nextwork.org/affectionate_green_mysterious_penguin/uploads/aws-networks-cloudfront_qgo7wcd3)

---

## Exploring Amazon CloudFront

Amazon CloudFront is a content delivery network, which means it speeds up the distribution of content. Businesses and developers use CloudFront because it uses caching, so content is deliverd with the best possible performance.

To use Amazon CloudFront, you set up distributions, which can be single or Mutli-tenant architecture website/application. we need to set up this distribution for our static website. The origin is S3 bucket because we have stored all the website files in the storage bucket.

My CloudFront distribution's default root object is index.html in S3. This means that whenever someone is trying to get to the website they go through CloudFront.

![Image](http://learn.nextwork.org/affectionate_green_mysterious_penguin/uploads/aws-networks-cloudfront_qgo7wcdt)

---

## Handling Access Issues

When I tried visiting my distributed website, I ran into an access denied error because I have not given permission to the CloudFront to access to the S3 in the Bucket Policies.

My distribution's origin access settings were public. This caused the access denied error because the cloudfront things that the S3 bucket objects are public, but actually they are not. 

In this step, we will set up an origin access control (OAC) in the CloudFront console because this will be the tool that grants CloudFront access to S3 bucket.

![Image](http://learn.nextwork.org/affectionate_green_mysterious_penguin/uploads/aws-networks-cloudfront_egrhntyu)

---

## Updating S3 Permissions

Once I set up my OAC, I still needed to update my bucket policy because by seting up OAC we are telling CloudFront that you can access S3 bucket objects, but If we donot update the S3 bucket policy the objects still can't be accessed by the cloudfront.

Creating an OAC automatically gives me a policy I could copy, which grants access of objects inside of S3 bucket to cloudfront.

![Image](http://learn.nextwork.org/affectionate_green_mysterious_penguin/uploads/aws-networks-cloudfront_eg98ntyu)

---

## S3 vs CloudFront for Hosting

For my project extension, I'm comparing S3 static website hosting and cloudfront. I initially had an error with static website hosting because we have not allowed any public access to the S3 objects.

I tried resolving this by allowin public access to the S3 objects. I still ran into an error because I didn't update the S3 bucket policy.

I could finally see my S3 hosted website when I updated the bucket policy. This worked because I unchecked block all public access.

Compared to the permission settings for my CloudFront distribution, using S3 means that we are essentially allowing all traffic from the internet to S3 bucket. I prefer using CloudFront because it is more secure by design because we only allow CloudFront to access S3 objects using Origin Acess Control and Updatinng S3 bucket policy.

---

## S3 vs CloudFront Load Times

---

---
