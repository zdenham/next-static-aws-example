This is a static [next.js](https://nextjs.org/) site built using [next-static-utils](https://github.com/zdenham/next-static-utils).

See the live demo [here](https://defn0rdp54dhd.cloudfront.net)!

It demonstrates hosting a static site **with** dynamic routes and the app router.

## Deployment Instructions for AWS S3 + Cloudfront

1. clone repo
2. `pnpm install`
3. Generate fallback routes: `pnpm next-static-utils generate cloudfront`
4. Build the application: `pnpm build`
5. Set up your local aws credentials
6. Create an S3 bucket `your-bucket`
7. Upload the static site `cd out && aws s3 sync . s3://your-bucket`
8. Ensure the bucket is public and has public read policy, instructions [here](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html#:~:text=To%20make%20the%20objects%20in,read%20access%20to%20your%20bucket)
9. Create a cloudfront distribution and connect it to the s3 bucket as the origin
10. Create a cloudfront function and paste the generated `cloudfrontFunc.js` at the root
11. Associate the cloudfront function with your distribution's origin behavior (under viewer request)

TODO: We will likely make a script to automate the above, via terraform or the AWS SDK 👀