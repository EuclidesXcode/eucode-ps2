import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  projectId: "eucode-6fbf0",
  privateKeyId: "76c1ae5a69602dd41b06b790d29c0c4859dd7438",
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkm6i68MHuKOte\ndI70/M4XhHctTSZ0teB+ZM7L2TnEUoLDXuVlPNB9jsS+jAv5G5HuHUswf7KNfuXj\nnY8k272DUaK0D3u9raP2xak5EWKL2IxwbaoSpeRLHXzE/EpuWWHJhLJ+4iSi9jKg\ncXDAqim+CWuiJmJos5WCl5xkedOH9GGDM76b0UbkxbgSibzKwe+pMF+hgUpW9KIM\n6lE5bQjuLS00JNt+DW9Nr6PB7082ui7Z5M2J05A2KkUXnTYj5q83uGXTVjxYeH21\ns/TUfLjzvS7zCzcpJOyn9PjgPGpTuPPk0zKX/jbzelgA5CCenN90A/bv8FyLukWX\nPTDD86IJAgMBAAECggEAA9Gqtf+c+DoRz+SzZmKxI2GK5E2sbTvFBBmxpJAbI39o\nkkDS4KjrC2azENqt8m8d0SDz3CGyUk8V5VSD/C5u9KuBs1zCmbF8It8OIIlTOHxj\nMb6RmhIoPEfoW6eg0HOZbbP68i+r+u3sWcWYAJhSFJsiWKY8VUKJXvjGg5xB+J78\n1orzNuY0pC6nPGXOjRtpjcAQPxeHqOMIXNtvrfVpRpVS/0U1SfcwUsIiXL+uEuMb\nnaRjJFE0qtv3YVvQ9vaVm4gFI3MxMiS645qGIXGdkzXK5SNSdmng1/yBZOSLTbyz\nbjKuu937TWzZ/YR1GoFT73e9FFlmwa2M4SY7H2jnaQKBgQDTqtqUIblBI3DGevZW\nNcalWO4FrHe7L57ERBil5o6OBK2nodR/ZqDtS4i/8TifRKTsVmzAZrzN+XUMw4VE\nXEvNGgarUcYXY4DSEGZ47LzGxVXUf62wFkvHDV+pKQ2rhQ0D5Z2Rfe/sD1d8sOa4\nuus/+oMhO9ErhEEJE1ten2LrdQKBgQDHFZW7+GGs9hCZ3XC52nBHAMVXJyntXkZA\nIOh6AqCmhQ0ajyoheJMZYMfTwY24WkVT5bW1ov0AWmbjwRPD2l6YsGdIRmk6Mtq0\nw/W53ohMSUfEXUXa9teWmZk0NHUBQ69cW3Rw8Nqo8GajWlpoUQ8TbcXFxzwMZXRC\niu9UGPGNxQKBgDzPPPSJq7s2/1NGSDcERAmEvv0KS2uPhsFD/wDKd/H9Dha2u2HO\njjUeGi9qkaXQBsGPIrczzNIv9JyyHztAeNZ3v6rAV3SotX2kEIx1FtbUIpBmDfQk\ns6iAAxeKH89C7jZMZTRDRgY/chb0i5ROvv8mbT3C/ZjO6hA9a2aHy9dxAoGAW1zw\nhn8KdFHIdJRHM0On2y3jYoe6mhB1tOBlT/j8uO6+gL3K2+l1uGPN0MQ2wa/LuSDm\nLyFJcmwKY+MrquoAF5p9C5IkoGzOKb70egRCEKBgqyES+dXmQlrjEC4ytA3X4E6o\nNVyTPIx2zeidLNpmTMhHxugUCqxUmmUgSDvaPvECgYBJMX931FKOlo3Q99elFjMd\nntqnOHNjiYOqhf9haPOs6OiaLyCln2AD+TiHnbxoXk7KXogl8dRg6sJ3TfaZSKtU\nlrVIn58ujXLM81wEXfIBN0rJlbvxoo8dVZBVLgfUJw9gGP5h7R+y+xWRw7T1dvvk\nL6sh0qPwG1yeOrbpZlDHeA==\n-----END PRIVATE KEY-----\n",
  clientEmail: "firebase-adminsdk-5fswx@eucode-6fbf0.iam.gserviceaccount.com",
  clientId: "118213600292898430460",
  authUri: "https://accounts.google.com/o/oauth2/auth",
  tokenUri: "https://oauth2.googleapis.com/token",
  authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
  clientX509CertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5fswx%40eucode-6fbf0.iam.gserviceaccount.com",
  databaseURL: "https://eucode-6fbf0-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };