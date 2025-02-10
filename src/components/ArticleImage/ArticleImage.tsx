import { useEffect, useState } from 'react';
import classes from './ArticleImage.module.scss'

const ArticleImage = ({ articleId, imageNumber }: { articleId: number, imageNumber: number }) => {
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        const getImageUrl = async (articleId: number, imageNumber: number) => {
            const extensions = ['png', 'jpg'];
            for (const ext of extensions) {
                const url = `/img/article${articleId}/image${imageNumber}.${ext}`;
                const exists = await checkImageExists(url);
                if (exists) {
                    setImageUrl(url);
                    return;
                }
            }
        };

        getImageUrl(articleId, imageNumber);
    }, [articleId, imageNumber]);

    const checkImageExists = (url: string): Promise<boolean> => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };

    return (
        <div>
            <img
                src={imageUrl}
                alt={`Article ${articleId} - Image ${imageNumber}`}
                className={classes.image}
            />
        </div>
    )
}

export default ArticleImage