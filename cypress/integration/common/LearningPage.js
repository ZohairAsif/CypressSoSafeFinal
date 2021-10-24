const defaultOptions = {
    language: 'en',
    timeout: 30000,
    // backend: 'dev',
};

class LearningPage {
    static options = {};

    static visit(code, options) {
        /** There's no limit to the number of objects you can merge.
         *  Later properties overwrite earlier properties with the same name. */
        const opt = { ...defaultOptions, ...(LearningPage.options), ...options };
        cy
            .visit(`/${opt.language}/?code=${code}&backend=dev`);
        // .visit(`/${opt.language}/?code=${code}&backend=${opt.backend}`);
        cy
            .get('#page', { timeout: opt.timeout })
            .should('be.visible');
    }

    static visitMaximum(options) {
        LearningPage.visit('374f3723e28b6292', options);
    }

    static visitMinimum(options) {
        LearningPage.visit('f8f5fafb5672e04e', options);
    }

    static visitOther(options) {
        LearningPage.visit('4e71eac0ae19481b', options);
    }
}
export default LearningPage;
